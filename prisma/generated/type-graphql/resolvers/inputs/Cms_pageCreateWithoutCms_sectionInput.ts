import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutCms_pageInput } from "../inputs/CategoryCreateNestedManyWithoutCms_pageInput";
import { Cms_page_translationCreateNestedManyWithoutCms_pageInput } from "../inputs/Cms_page_translationCreateNestedManyWithoutCms_pageInput";
import { Landing_pageCreateNestedManyWithoutCms_pageInput } from "../inputs/Landing_pageCreateNestedManyWithoutCms_pageInput";
import { MediaCreateNestedOneWithoutCms_pageInput } from "../inputs/MediaCreateNestedOneWithoutCms_pageInput";
import { ProductCreateNestedManyWithoutCms_pageInput } from "../inputs/ProductCreateNestedManyWithoutCms_pageInput";
import { Sales_channelCreateNestedManyWithoutCms_pageInput } from "../inputs/Sales_channelCreateNestedManyWithoutCms_pageInput";

@TypeGraphQL.InputType("Cms_pageCreateWithoutCms_sectionInput", {})
export class Cms_pageCreateWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  version_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entity?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  css_class?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutCms_pageInput, {
    nullable: true
  })
  category?: CategoryCreateNestedManyWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutCms_pageInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateNestedManyWithoutCms_pageInput, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationCreateNestedManyWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateNestedManyWithoutCms_pageInput, {
    nullable: true
  })
  landing_page?: Landing_pageCreateNestedManyWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCms_pageInput, {
    nullable: true
  })
  product?: ProductCreateNestedManyWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCms_pageInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutCms_pageInput | undefined;
}
