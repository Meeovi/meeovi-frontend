import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageWhereInput } from "../inputs/Klaviyo_flag_storageWhereInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageListRelationFilter", {})
export class Klaviyo_flag_storageListRelationFilter {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereInput, {
    nullable: true
  })
  every?: Klaviyo_flag_storageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereInput, {
    nullable: true
  })
  some?: Klaviyo_flag_storageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereInput, {
    nullable: true
  })
  none?: Klaviyo_flag_storageWhereInput | undefined;
}
