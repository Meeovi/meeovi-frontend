import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Custom_entityOrderByWithRelationAndSearchRelevanceInput";
import { Custom_entityWhereInput } from "../../../inputs/Custom_entityWhereInput";
import { Custom_entityWhereUniqueInput } from "../../../inputs/Custom_entityWhereUniqueInput";
import { Custom_entityScalarFieldEnum } from "../../../../enums/Custom_entityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  where?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Custom_entityOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: true
  })
  cursor?: Custom_entityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "fields" | "app_id" | "created_at" | "updated_at" | "flags" | "plugin_id" | "custom_fields_aware" | "label_property" | "deleted_at"> | undefined;
}
