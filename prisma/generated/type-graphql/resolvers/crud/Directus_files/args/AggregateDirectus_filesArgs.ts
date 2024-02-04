import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_filesOrderByWithRelationAndSearchRelevanceInput";
import { Directus_filesWhereInput } from "../../../inputs/Directus_filesWhereInput";
import { Directus_filesWhereUniqueInput } from "../../../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  where?: Directus_filesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_filesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_filesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
