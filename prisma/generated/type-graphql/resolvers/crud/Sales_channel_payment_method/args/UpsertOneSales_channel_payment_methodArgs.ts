import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodCreateInput } from "../../../inputs/Sales_channel_payment_methodCreateInput";
import { Sales_channel_payment_methodUpdateInput } from "../../../inputs/Sales_channel_payment_methodUpdateInput";
import { Sales_channel_payment_methodWhereUniqueInput } from "../../../inputs/Sales_channel_payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_payment_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodCreateInput, {
    nullable: false
  })
  create!: Sales_channel_payment_methodCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_payment_methodUpdateInput;
}
