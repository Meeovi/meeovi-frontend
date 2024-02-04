import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodCreateInput } from "../../../inputs/Shipping_methodCreateInput";
import { Shipping_methodUpdateInput } from "../../../inputs/Shipping_methodUpdateInput";
import { Shipping_methodWhereUniqueInput } from "../../../inputs/Shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Shipping_methodCreateInput, {
    nullable: false
  })
  create!: Shipping_methodCreateInput;

  @TypeGraphQL.Field(_type => Shipping_methodUpdateInput, {
    nullable: false
  })
  update!: Shipping_methodUpdateInput;
}
