import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutLanding_pageInput } from "../inputs/Cms_pageCreateOrConnectWithoutLanding_pageInput";
import { Cms_pageCreateWithoutLanding_pageInput } from "../inputs/Cms_pageCreateWithoutLanding_pageInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateNestedOneWithoutLanding_pageInput", {})
export class Cms_pageCreateNestedOneWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutLanding_pageInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutLanding_pageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutLanding_pageInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutLanding_pageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;
}
