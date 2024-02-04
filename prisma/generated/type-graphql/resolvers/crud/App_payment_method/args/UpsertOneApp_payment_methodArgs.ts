import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodCreateInput } from "../../../inputs/App_payment_methodCreateInput";
import { App_payment_methodUpdateInput } from "../../../inputs/App_payment_methodUpdateInput";
import { App_payment_methodWhereUniqueInput } from "../../../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_payment_methodCreateInput, {
    nullable: false
  })
  create!: App_payment_methodCreateInput;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateInput, {
    nullable: false
  })
  update!: App_payment_methodUpdateInput;
}
