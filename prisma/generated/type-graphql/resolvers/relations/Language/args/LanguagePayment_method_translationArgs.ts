import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Payment_method_translationOrderByWithRelationAndSearchRelevanceInput";
import { Payment_method_translationWhereInput } from "../../../inputs/Payment_method_translationWhereInput";
import { Payment_method_translationWhereUniqueInput } from "../../../inputs/Payment_method_translationWhereUniqueInput";
import { Payment_method_translationScalarFieldEnum } from "../../../../enums/Payment_method_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguagePayment_method_translationArgs {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereInput, {
    nullable: true
  })
  where?: Payment_method_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Payment_method_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Payment_method_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"payment_method_id" | "language_id" | "name" | "distinguishable_name" | "description" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
