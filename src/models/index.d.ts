import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHealthcheck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Healthcheck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly place?: string | null;
  readonly option?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHealthcheck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Healthcheck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly place?: string | null;
  readonly option?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Healthcheck = LazyLoading extends LazyLoadingDisabled ? EagerHealthcheck : LazyHealthcheck

export declare const Healthcheck: (new (init: ModelInit<Healthcheck>) => Healthcheck) & {
  copyOf(source: Healthcheck, mutator: (draft: MutableModel<Healthcheck>) => MutableModel<Healthcheck> | void): Healthcheck;
}