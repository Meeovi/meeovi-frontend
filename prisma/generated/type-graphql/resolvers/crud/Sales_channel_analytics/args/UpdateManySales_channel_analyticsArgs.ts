import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsUpdateManyMutationInput } from "../../../inputs/Sales_channel_analyticsUpdateManyMutationInput";
import { Sales_channel_analyticsWhereInput } from "../../../inputs/Sales_channel_analyticsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_analyticsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereInput, {
    nullable: true
  })
  where?: Sales_channel_analyticsWhereInput | undefined;
}
