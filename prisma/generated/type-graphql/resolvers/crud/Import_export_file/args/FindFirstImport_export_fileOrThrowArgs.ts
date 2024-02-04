import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Import_export_fileOrderByWithRelationAndSearchRelevanceInput";
import { Import_export_fileWhereInput } from "../../../inputs/Import_export_fileWhereInput";
import { Import_export_fileWhereUniqueInput } from "../../../inputs/Import_export_fileWhereUniqueInput";
import { Import_export_fileScalarFieldEnum } from "../../../../enums/Import_export_fileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstImport_export_fileOrThrowArgs {
  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  where?: Import_export_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Import_export_fileOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileWhereUniqueInput, {
    nullable: true
  })
  cursor?: Import_export_fileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "original_name" | "path" | "expire_date" | "size" | "updated_at" | "created_at" | "access_token"> | undefined;
}
