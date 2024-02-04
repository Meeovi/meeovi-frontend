import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersOrderByWithAggregationInput } from "../../../inputs/Directus_foldersOrderByWithAggregationInput";
import { Directus_foldersScalarWhereWithAggregatesInput } from "../../../inputs/Directus_foldersScalarWhereWithAggregatesInput";
import { Directus_foldersWhereInput } from "../../../inputs/Directus_foldersWhereInput";
import { Directus_foldersScalarFieldEnum } from "../../../../enums/Directus_foldersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  where?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_foldersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "parent">;

  @TypeGraphQL.Field(_type => Directus_foldersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_foldersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
