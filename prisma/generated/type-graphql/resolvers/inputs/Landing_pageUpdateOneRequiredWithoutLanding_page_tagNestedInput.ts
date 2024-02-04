import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateOrConnectWithoutLanding_page_tagInput } from "../inputs/Landing_pageCreateOrConnectWithoutLanding_page_tagInput";
import { Landing_pageCreateWithoutLanding_page_tagInput } from "../inputs/Landing_pageCreateWithoutLanding_page_tagInput";
import { Landing_pageUpdateToOneWithWhereWithoutLanding_page_tagInput } from "../inputs/Landing_pageUpdateToOneWithWhereWithoutLanding_page_tagInput";
import { Landing_pageUpsertWithoutLanding_page_tagInput } from "../inputs/Landing_pageUpsertWithoutLanding_page_tagInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput", {})
export class Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput {
  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutLanding_page_tagInput, {
    nullable: true
  })
  create?: Landing_pageCreateWithoutLanding_page_tagInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateOrConnectWithoutLanding_page_tagInput, {
    nullable: true
  })
  connectOrCreate?: Landing_pageCreateOrConnectWithoutLanding_page_tagInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageUpsertWithoutLanding_page_tagInput, {
    nullable: true
  })
  upsert?: Landing_pageUpsertWithoutLanding_page_tagInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Landing_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageUpdateToOneWithWhereWithoutLanding_page_tagInput, {
    nullable: true
  })
  update?: Landing_pageUpdateToOneWithWhereWithoutLanding_page_tagInput | undefined;
}
