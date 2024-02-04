import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodUpdateManyMutationInput } from "../../../inputs/Sales_channel_payment_methodUpdateManyMutationInput";
import { Sales_channel_payment_methodWhereInput } from "../../../inputs/Sales_channel_payment_methodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_payment_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_payment_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_payment_methodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodWhereInput, {
    nullable: true
  })
  where?: Sales_channel_payment_methodWhereInput | undefined;
}
