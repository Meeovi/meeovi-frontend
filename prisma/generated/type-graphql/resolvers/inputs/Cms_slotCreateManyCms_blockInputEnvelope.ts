import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateManyCms_blockInput } from "../inputs/Cms_slotCreateManyCms_blockInput";

@TypeGraphQL.InputType("Cms_slotCreateManyCms_blockInputEnvelope", {})
export class Cms_slotCreateManyCms_blockInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_slotCreateManyCms_blockInput], {
    nullable: false
  })
  data!: Cms_slotCreateManyCms_blockInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
