import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageScalarWhereInput } from "../inputs/Klaviyo_flag_storageScalarWhereInput";
import { Klaviyo_flag_storageUpdateManyMutationInput } from "../inputs/Klaviyo_flag_storageUpdateManyMutationInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageUpdateManyWithWhereWithoutSales_channelInput", {})
export class Klaviyo_flag_storageUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageScalarWhereInput, {
    nullable: false
  })
  where!: Klaviyo_flag_storageScalarWhereInput;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klaviyo_flag_storageUpdateManyMutationInput;
}
