import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateNestedManyWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelCreateNestedManyWithoutLanding_pageInput";
import { Landing_page_tagCreateNestedManyWithoutLanding_pageInput } from "../inputs/Landing_page_tagCreateNestedManyWithoutLanding_pageInput";
import { Landing_page_translationCreateNestedManyWithoutLanding_pageInput } from "../inputs/Landing_page_translationCreateNestedManyWithoutLanding_pageInput";

@TypeGraphQL.InputType("Landing_pageCreateWithoutCms_pageInput", {})
export class Landing_pageCreateWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateNestedManyWithoutLanding_pageInput, {
    nullable: true
  })
  landing_page_sales_channel?: Landing_page_sales_channelCreateNestedManyWithoutLanding_pageInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagCreateNestedManyWithoutLanding_pageInput, {
    nullable: true
  })
  landing_page_tag?: Landing_page_tagCreateNestedManyWithoutLanding_pageInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateNestedManyWithoutLanding_pageInput, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationCreateNestedManyWithoutLanding_pageInput | undefined;
}
