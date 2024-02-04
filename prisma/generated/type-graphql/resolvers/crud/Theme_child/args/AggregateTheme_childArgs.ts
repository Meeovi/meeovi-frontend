import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Theme_childOrderByWithRelationAndSearchRelevanceInput";
import { Theme_childWhereInput } from "../../../inputs/Theme_childWhereInput";
import { Theme_childWhereUniqueInput } from "../../../inputs/Theme_childWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childWhereInput, {
    nullable: true
  })
  where?: Theme_childWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_childOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Theme_childOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Theme_childWhereUniqueInput, {
    nullable: true
  })
  cursor?: Theme_childWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
