import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Klaviyo_flag_storageOrderByWithRelationAndSearchRelevanceInput";
import { Klaviyo_flag_storageWhereInput } from "../../../inputs/Klaviyo_flag_storageWhereInput";
import { Klaviyo_flag_storageWhereUniqueInput } from "../../../inputs/Klaviyo_flag_storageWhereUniqueInput";
import { Klaviyo_flag_storageScalarFieldEnum } from "../../../../enums/Klaviyo_flag_storageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereInput, {
    nullable: true
  })
  where?: Klaviyo_flag_storageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Klaviyo_flag_storageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Klaviyo_flag_storageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "key" | "value" | "sales_channel_id" | "created_at" | "updated_at"> | undefined;
}
