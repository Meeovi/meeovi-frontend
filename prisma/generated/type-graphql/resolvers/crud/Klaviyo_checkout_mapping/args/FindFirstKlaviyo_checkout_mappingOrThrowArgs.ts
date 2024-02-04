import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Klaviyo_checkout_mappingOrderByWithRelationAndSearchRelevanceInput";
import { Klaviyo_checkout_mappingWhereInput } from "../../../inputs/Klaviyo_checkout_mappingWhereInput";
import { Klaviyo_checkout_mappingWhereUniqueInput } from "../../../inputs/Klaviyo_checkout_mappingWhereUniqueInput";
import { Klaviyo_checkout_mappingScalarFieldEnum } from "../../../../enums/Klaviyo_checkout_mappingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstKlaviyo_checkout_mappingOrThrowArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereInput, {
    nullable: true
  })
  where?: Klaviyo_checkout_mappingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Klaviyo_checkout_mappingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereUniqueInput, {
    nullable: true
  })
  cursor?: Klaviyo_checkout_mappingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "reference" | "mapping_table" | "created_at" | "updated_at"> | undefined;
}
