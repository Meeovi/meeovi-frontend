import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodUpdateInput } from "../../../inputs/App_payment_methodUpdateInput";
import { App_payment_methodWhereUniqueInput } from "../../../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => App_payment_methodUpdateInput, {
    nullable: false
  })
  data!: App_payment_methodUpdateInput;

  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_payment_methodWhereUniqueInput;
}
