import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationOrderByWithAggregationInput } from "../../../inputs/Media_translationOrderByWithAggregationInput";
import { Media_translationScalarWhereWithAggregatesInput } from "../../../inputs/Media_translationScalarWhereWithAggregatesInput";
import { Media_translationWhereInput } from "../../../inputs/Media_translationWhereInput";
import { Media_translationScalarFieldEnum } from "../../../../enums/Media_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  where?: Media_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"media_id" | "language_id" | "alt" | "title" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Media_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
