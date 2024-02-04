import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_default_folderOrderByWithRelationAndSearchRelevanceInput";
import { Media_default_folderWhereInput } from "../../../inputs/Media_default_folderWhereInput";
import { Media_default_folderWhereUniqueInput } from "../../../inputs/Media_default_folderWhereUniqueInput";
import { Media_default_folderScalarFieldEnum } from "../../../../enums/Media_default_folderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMedia_default_folderOrThrowArgs {
  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  where?: Media_default_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_default_folderOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_default_folderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "association_fields" | "entity" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
