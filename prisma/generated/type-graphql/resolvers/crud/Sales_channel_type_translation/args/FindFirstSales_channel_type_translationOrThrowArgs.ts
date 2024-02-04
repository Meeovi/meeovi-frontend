import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_type_translationOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_type_translationWhereInput } from "../../../inputs/Sales_channel_type_translationWhereInput";
import { Sales_channel_type_translationWhereUniqueInput } from "../../../inputs/Sales_channel_type_translationWhereUniqueInput";
import { Sales_channel_type_translationScalarFieldEnum } from "../../../../enums/Sales_channel_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSales_channel_type_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereInput, {
    nullable: true
  })
  where?: Sales_channel_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_type_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_type_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_type_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_type_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_type_id" | "language_id" | "name" | "manufacturer" | "description" | "description_long" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
