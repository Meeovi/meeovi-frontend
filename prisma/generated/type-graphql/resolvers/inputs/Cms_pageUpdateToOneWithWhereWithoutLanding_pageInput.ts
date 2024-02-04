import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageUpdateWithoutLanding_pageInput } from "../inputs/Cms_pageUpdateWithoutLanding_pageInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpdateToOneWithWhereWithoutLanding_pageInput", {})
export class Cms_pageUpdateToOneWithWhereWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutLanding_pageInput, {
    nullable: false
  })
  data!: Cms_pageUpdateWithoutLanding_pageInput;
}
