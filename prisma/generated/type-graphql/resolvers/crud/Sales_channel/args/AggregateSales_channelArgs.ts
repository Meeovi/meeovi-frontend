import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelWhereInput } from "../../../inputs/Sales_channelWhereInput";
import { Sales_channelWhereUniqueInput } from "../../../inputs/Sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereInput, {
    nullable: true
  })
  where?: Sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
