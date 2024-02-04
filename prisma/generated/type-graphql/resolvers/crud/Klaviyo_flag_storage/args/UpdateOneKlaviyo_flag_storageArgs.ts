import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageUpdateInput } from "../../../inputs/Klaviyo_flag_storageUpdateInput";
import { Klaviyo_flag_storageWhereUniqueInput } from "../../../inputs/Klaviyo_flag_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageUpdateInput, {
    nullable: false
  })
  data!: Klaviyo_flag_storageUpdateInput;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_flag_storageWhereUniqueInput;
}
