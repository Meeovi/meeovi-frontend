import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelUpdateManyMutationInput } from "../../../inputs/Sales_channelUpdateManyMutationInput";
import { Sales_channelWhereInput } from "../../../inputs/Sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channelWhereInput, {
    nullable: true
  })
  where?: Sales_channelWhereInput | undefined;
}
