import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateOrConnectWithoutLanding_page_translationInput } from "../inputs/Landing_pageCreateOrConnectWithoutLanding_page_translationInput";
import { Landing_pageCreateWithoutLanding_page_translationInput } from "../inputs/Landing_pageCreateWithoutLanding_page_translationInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageCreateNestedOneWithoutLanding_page_translationInput", {})
export class Landing_pageCreateNestedOneWithoutLanding_page_translationInput {
  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutLanding_page_translationInput, {
    nullable: true
  })
  create?: Landing_pageCreateWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateOrConnectWithoutLanding_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: Landing_pageCreateOrConnectWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Landing_pageWhereUniqueInput | undefined;
}
