import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedManyWithoutMail_header_footerInput } from "../inputs/Sales_channelCreateNestedManyWithoutMail_header_footerInput";

@TypeGraphQL.InputType("Mail_header_footerCreateWithoutMail_header_footer_translationInput", {})
export class Mail_header_footerCreateWithoutMail_header_footer_translationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  system_default?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutMail_header_footerInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutMail_header_footerInput | undefined;
}
