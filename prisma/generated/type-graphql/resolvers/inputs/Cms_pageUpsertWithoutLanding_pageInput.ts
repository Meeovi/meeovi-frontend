import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutLanding_pageInput } from "../inputs/Cms_pageCreateWithoutLanding_pageInput";
import { Cms_pageUpdateWithoutLanding_pageInput } from "../inputs/Cms_pageUpdateWithoutLanding_pageInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpsertWithoutLanding_pageInput", {})
export class Cms_pageUpsertWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutLanding_pageInput, {
    nullable: false
  })
  update!: Cms_pageUpdateWithoutLanding_pageInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutLanding_pageInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutLanding_pageInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
