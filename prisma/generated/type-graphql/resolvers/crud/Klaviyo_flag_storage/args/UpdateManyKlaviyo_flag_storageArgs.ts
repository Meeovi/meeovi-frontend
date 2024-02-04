import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageUpdateManyMutationInput } from "../../../inputs/Klaviyo_flag_storageUpdateManyMutationInput";
import { Klaviyo_flag_storageWhereInput } from "../../../inputs/Klaviyo_flag_storageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klaviyo_flag_storageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereInput, {
    nullable: true
  })
  where?: Klaviyo_flag_storageWhereInput | undefined;
}
