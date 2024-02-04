import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyUpdateManyMutationInput } from "../../../inputs/Sales_channel_currencyUpdateManyMutationInput";
import { Sales_channel_currencyWhereInput } from "../../../inputs/Sales_channel_currencyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => Sales_channel_currencyUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_currencyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_currencyWhereInput, {
    nullable: true
  })
  where?: Sales_channel_currencyWhereInput | undefined;
}
