import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodUpdateManyMutationInput } from "../../../inputs/Shipping_methodUpdateManyMutationInput";
import { Shipping_methodWhereInput } from "../../../inputs/Shipping_methodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: Shipping_methodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Shipping_methodWhereInput, {
    nullable: true
  })
  where?: Shipping_methodWhereInput | undefined;
}
