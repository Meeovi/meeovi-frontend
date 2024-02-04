import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Theme_translationOrderByWithRelationAndSearchRelevanceInput";
import { Theme_translationWhereInput } from "../../../inputs/Theme_translationWhereInput";
import { Theme_translationWhereUniqueInput } from "../../../inputs/Theme_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationWhereInput, {
    nullable: true
  })
  where?: Theme_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Theme_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Theme_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Theme_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
