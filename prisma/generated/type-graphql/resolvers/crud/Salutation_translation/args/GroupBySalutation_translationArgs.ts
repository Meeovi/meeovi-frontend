import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationOrderByWithAggregationInput } from "../../../inputs/Salutation_translationOrderByWithAggregationInput";
import { Salutation_translationScalarWhereWithAggregatesInput } from "../../../inputs/Salutation_translationScalarWhereWithAggregatesInput";
import { Salutation_translationWhereInput } from "../../../inputs/Salutation_translationWhereInput";
import { Salutation_translationScalarFieldEnum } from "../../../../enums/Salutation_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationWhereInput, {
    nullable: true
  })
  where?: Salutation_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Salutation_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Salutation_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Salutation_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"salutation_id" | "language_id" | "display_name" | "letter_name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Salutation_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Salutation_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
