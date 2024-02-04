import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CurrencyOrderByWithRelationAndSearchRelevanceInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrencyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CurrencyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
