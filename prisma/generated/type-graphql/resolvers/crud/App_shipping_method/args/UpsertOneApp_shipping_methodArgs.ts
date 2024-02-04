import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodCreateInput } from "../../../inputs/App_shipping_methodCreateInput";
import { App_shipping_methodUpdateInput } from "../../../inputs/App_shipping_methodUpdateInput";
import { App_shipping_methodWhereUniqueInput } from "../../../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateInput, {
    nullable: false
  })
  create!: App_shipping_methodCreateInput;

  @TypeGraphQL.Field(_type => App_shipping_methodUpdateInput, {
    nullable: false
  })
  update!: App_shipping_methodUpdateInput;
}
