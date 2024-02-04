import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodWhereUniqueInput } from "../../../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_shipping_methodWhereUniqueInput;
}
