import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateManyCms_slotInput } from "../inputs/Cms_slot_translationCreateManyCms_slotInput";

@TypeGraphQL.InputType("Cms_slot_translationCreateManyCms_slotInputEnvelope", {})
export class Cms_slot_translationCreateManyCms_slotInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateManyCms_slotInput], {
    nullable: false
  })
  data!: Cms_slot_translationCreateManyCms_slotInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
