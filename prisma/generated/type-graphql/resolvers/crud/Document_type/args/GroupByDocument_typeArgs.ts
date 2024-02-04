import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeOrderByWithAggregationInput } from "../../../inputs/Document_typeOrderByWithAggregationInput";
import { Document_typeScalarWhereWithAggregatesInput } from "../../../inputs/Document_typeScalarWhereWithAggregatesInput";
import { Document_typeWhereInput } from "../../../inputs/Document_typeWhereInput";
import { Document_typeScalarFieldEnum } from "../../../../enums/Document_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Document_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Document_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Document_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
