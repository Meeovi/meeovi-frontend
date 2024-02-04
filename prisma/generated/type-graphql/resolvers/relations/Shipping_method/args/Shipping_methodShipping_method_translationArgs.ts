import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Shipping_method_translationOrderByWithRelationAndSearchRelevanceInput";
import { Shipping_method_translationWhereInput } from "../../../inputs/Shipping_method_translationWhereInput";
import { Shipping_method_translationWhereUniqueInput } from "../../../inputs/Shipping_method_translationWhereUniqueInput";
import { Shipping_method_translationScalarFieldEnum } from "../../../../enums/Shipping_method_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Shipping_methodShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationWhereInput, {
    nullable: true
  })
  where?: Shipping_method_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Shipping_method_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Shipping_method_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"shipping_method_id" | "language_id" | "name" | "description" | "tracking_url" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
