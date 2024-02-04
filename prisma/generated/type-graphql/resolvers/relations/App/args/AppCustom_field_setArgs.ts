import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Custom_field_setOrderByWithRelationAndSearchRelevanceInput";
import { Custom_field_setWhereInput } from "../../../inputs/Custom_field_setWhereInput";
import { Custom_field_setWhereUniqueInput } from "../../../inputs/Custom_field_setWhereUniqueInput";
import { Custom_field_setScalarFieldEnum } from "../../../../enums/Custom_field_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AppCustom_field_setArgs {
  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  where?: Custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Custom_field_setOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: true
  })
  cursor?: Custom_field_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "config" | "active" | "app_id" | "position" | "global" | "created_at" | "updated_at"> | undefined;
}
