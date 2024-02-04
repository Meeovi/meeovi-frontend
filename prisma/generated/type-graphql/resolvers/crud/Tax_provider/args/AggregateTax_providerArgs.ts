import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_providerOrderByWithRelationAndSearchRelevanceInput";
import { Tax_providerWhereInput } from "../../../inputs/Tax_providerWhereInput";
import { Tax_providerWhereUniqueInput } from "../../../inputs/Tax_providerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerWhereInput, {
    nullable: true
  })
  where?: Tax_providerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_providerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Tax_providerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_providerWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_providerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
