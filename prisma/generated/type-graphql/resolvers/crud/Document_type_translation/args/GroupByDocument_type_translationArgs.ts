import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationOrderByWithAggregationInput } from "../../../inputs/Document_type_translationOrderByWithAggregationInput";
import { Document_type_translationScalarWhereWithAggregatesInput } from "../../../inputs/Document_type_translationScalarWhereWithAggregatesInput";
import { Document_type_translationWhereInput } from "../../../inputs/Document_type_translationWhereInput";
import { Document_type_translationScalarFieldEnum } from "../../../../enums/Document_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  where?: Document_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Document_type_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"document_type_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Document_type_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Document_type_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
