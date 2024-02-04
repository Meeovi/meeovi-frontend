import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodUpdateManyMutationInput } from "../../../inputs/Sales_channel_shipping_methodUpdateManyMutationInput";
import { Sales_channel_shipping_methodWhereInput } from "../../../inputs/Sales_channel_shipping_methodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_shipping_methodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodWhereInput, {
    nullable: true
  })
  where?: Sales_channel_shipping_methodWhereInput | undefined;
}
