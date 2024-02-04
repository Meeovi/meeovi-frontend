import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageCreateInput } from "../../../inputs/Klaviyo_flag_storageCreateInput";
import { Klaviyo_flag_storageUpdateInput } from "../../../inputs/Klaviyo_flag_storageUpdateInput";
import { Klaviyo_flag_storageWhereUniqueInput } from "../../../inputs/Klaviyo_flag_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_flag_storageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageCreateInput, {
    nullable: false
  })
  create!: Klaviyo_flag_storageCreateInput;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageUpdateInput, {
    nullable: false
  })
  update!: Klaviyo_flag_storageUpdateInput;
}
