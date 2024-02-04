import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationOrderByWithAggregationInput } from "../../../inputs/Locale_translationOrderByWithAggregationInput";
import { Locale_translationScalarWhereWithAggregatesInput } from "../../../inputs/Locale_translationScalarWhereWithAggregatesInput";
import { Locale_translationWhereInput } from "../../../inputs/Locale_translationWhereInput";
import { Locale_translationScalarFieldEnum } from "../../../../enums/Locale_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  where?: Locale_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Locale_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"locale_id" | "language_id" | "name" | "territory" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Locale_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Locale_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
