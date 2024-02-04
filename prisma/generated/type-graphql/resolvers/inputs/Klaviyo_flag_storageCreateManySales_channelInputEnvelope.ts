import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageCreateManySales_channelInput } from "../inputs/Klaviyo_flag_storageCreateManySales_channelInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageCreateManySales_channelInputEnvelope", {})
export class Klaviyo_flag_storageCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageCreateManySales_channelInput], {
    nullable: false
  })
  data!: Klaviyo_flag_storageCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
