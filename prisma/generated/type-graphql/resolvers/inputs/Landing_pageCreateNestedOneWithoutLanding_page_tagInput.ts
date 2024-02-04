import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateOrConnectWithoutLanding_page_tagInput } from "../inputs/Landing_pageCreateOrConnectWithoutLanding_page_tagInput";
import { Landing_pageCreateWithoutLanding_page_tagInput } from "../inputs/Landing_pageCreateWithoutLanding_page_tagInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageCreateNestedOneWithoutLanding_page_tagInput", {})
export class Landing_pageCreateNestedOneWithoutLanding_page_tagInput {
  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutLanding_page_tagInput, {
    nullable: true
  })
  create?: Landing_pageCreateWithoutLanding_page_tagInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateOrConnectWithoutLanding_page_tagInput, {
    nullable: true
  })
  connectOrCreate?: Landing_pageCreateOrConnectWithoutLanding_page_tagInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Landing_pageWhereUniqueInput | undefined;
}
