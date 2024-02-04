import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutLanding_pageInput } from "../inputs/Cms_pageCreateWithoutLanding_pageInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateOrConnectWithoutLanding_pageInput", {})
export class Cms_pageCreateOrConnectWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutLanding_pageInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutLanding_pageInput;
}
